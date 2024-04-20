export function entries<K extends string, V>(obj: Partial<Record<K, V>>): [K, V][] {
    return Object.entries(obj) as [K, V][];
}

export function fromEntries<K extends string, V>(entries: [K, V][]): Record<K, V> {
    return Object.fromEntries(entries) as Record<K, V>;
}

export function keys<K extends string>(obj: Partial<Record<K, unknown>>): K[] {
    return Object.keys(obj) as K[];
}

export function values<V>(obj: Partial<Record<string | number | symbol, V>>): V[] {
    return Object.values(obj) as V[];
}