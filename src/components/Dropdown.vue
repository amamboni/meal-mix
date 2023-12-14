<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

interface Props {
  align?: 'left' | 'right' | 'center' | 'bottom-right'
  width?: string
  fullWidth?: boolean
  height?: string
  contentClasses?: string[]
  closeOnClick?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  align: 'right',
  width: 'w-48',
  fullWidth: false,
  height: 'max-h-52',
  contentClasses: () => ['py-1', 'bg-white'],
  closeOnClick: true,
})

const open = ref(false)

const trigger = ref<HTMLDivElement>()
const dropdown = ref<HTMLDivElement>()

const top = ref('')
const bottom = ref('')
const left = ref('')
const right = ref('')
const margin = ref('')

const originClasses = computed(() => {
  if (props.align === 'left') {
    return 'origin-top-left'
  }

  if (props.align === 'center') {
    return 'origin-top'
  }

  if (props.align === 'bottom-right') {
    return 'origin-bottom-left'
  }

  return 'origin-top-right'
})

const openDropdown = () => {
  open.value = true

  nextTick(() => {
    const triggerRect = trigger.value?.getBoundingClientRect()
    const dropdownRect = dropdown.value?.getBoundingClientRect()

    const triggerBottom = triggerRect?.bottom || 0
    const triggerLeft = triggerRect?.left || 0
    const triggerRight = triggerRect?.right || 0

    const dropdownWidth = dropdownRect?.width || 0

    if (props.align === 'bottom-right') {
      bottom.value = `${window.innerHeight - triggerBottom}px`
      margin.value = 'mx-2'
    } else {
      top.value = `${triggerBottom}px`
      margin.value = 'my-2'
    }

    if (props.align === 'left') {
      left.value = `${triggerLeft}px`
    } else if (props.align === 'center') {
      left.value = `${triggerLeft - dropdownWidth / 2}px`
    } else if (props.align === 'bottom-right') {
      left.value = `${triggerRight}px`
    } else {
      right.value = `${window.innerWidth - triggerRight}px`
    }

    if (props.fullWidth && dropdown.value) {
      dropdown.value.style.width = `${triggerRect?.width}px`
    }
  })
}

const closeDropdown = () => {
  open.value = false
}

const closeOnEscape = (e: KeyboardEvent) => {
  if (open.value && e.key === 'Escape') {
    closeDropdown()
  }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape))
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape))
</script>

<template>
  <div>
    <div ref="trigger" @click="openDropdown">
      <slot name="trigger" :open="open" />
    </div>

    <teleport to="body">
      <!-- Full Screen Dropdown Overlay -->
      <div v-show="open" class="fixed inset-0 z-[98]" @click="closeDropdown" />

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-show="open"
          ref="dropdown"
          class="fixed z-[99] rounded shadow overflow-auto"
          :class="[width, height, margin, originClasses]"
          :style="{ top, bottom, left, right }"
          @click="open = !closeOnClick"
        >
          <div class="rounded ring-1 ring-black ring-opacity-5" :class="contentClasses">
            <slot name="content" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
