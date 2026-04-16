import type { WaliSantriCategory } from "../../../../generated/index.js";

export interface ICreateWaliRelation {
  waliId: string;
  santriId: string;
  name?: string;
  phone?: string | null;
  photoUrl?: string | null;
  category: WaliSantriCategory
}

export interface IUpdateWaliRelation {
  name?: string;
  phone?: string | null;
  photoUrl?: string | null;
  category: WaliSantriCategory;
}
