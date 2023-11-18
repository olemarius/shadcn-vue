import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { camelize, getCurrentInstance, toHandlerKey } from 'vue'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function useEmitAsProps(emit) {
  const vm = getCurrentInstance()
  const events = vm?.type.emits
  const result = {}
  if (!events?.length)
    console.warn(`No emitted event found. Please check component: ${vm?.type.__name}`)

  events?.forEach((ev) => {
    result[toHandlerKey(camelize(ev))] = (...arg) => emit(ev, ...arg)
  })
  return result
}
export function valueUpdater(updaterOrValue, ref) {
  ref.value
        = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}
