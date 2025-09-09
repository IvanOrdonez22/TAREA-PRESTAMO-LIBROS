import { UserRepository } from "./UserRepository.js";

export class SupabaseUserRepository extends UserRepository {
  constructor(client) {
    super();
    this.client = client;
  }

  save(user) {
    console.log("💾 Guardando en Supabase:", user.toDto());
  }

  findById(id) {
    console.log("🔍 Buscando en Supabase con id:", id);
    return null;
  }
}
