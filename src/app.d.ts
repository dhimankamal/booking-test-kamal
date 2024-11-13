// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { UserType } from "@kinde-oss/kinde-auth-sveltekit";
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      isAuthenticated: boolean;
      userProfile: UserType | null;
      permissions: string[];
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
