import { type ClassValue } from 'clsx'
import type { Updater } from '@tanstack/vue-table'
import { type Ref } from 'vue'

export declare function cn(...inputs: ClassValue[]): string
export declare function useEmitAsProps<Name extends string>(emit: (name: Name, ...args: any[]) => void): Record<string, any>
export declare function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref): void
