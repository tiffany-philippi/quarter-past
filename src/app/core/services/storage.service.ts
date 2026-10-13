import { Injectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StorageKey } from '../constants/storage-keys';

/** Thin wrapper around Ionic Storage (IndexedDB on web, native storage on devices). */
@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly storage = inject(Storage);
  private ready: Promise<Storage> | null = null;

  private init(): Promise<Storage> {
    this.ready ??= this.storage.create();
    return this.ready;
  }

  async get<T>(key: StorageKey): Promise<T | null> {
    const storage = await this.init();
    return (await storage.get(key)) ?? null;
  }

  async set<T>(key: StorageKey, value: T): Promise<void> {
    const storage = await this.init();
    await storage.set(key, value);
  }

  async remove(key: StorageKey): Promise<void> {
    const storage = await this.init();
    await storage.remove(key);
  }
}
