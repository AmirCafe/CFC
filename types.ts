import { Timestamp } from 'firebase/firestore';

export type UserRole = 'super_admin' | 'center_admin' | 'staff';

export type Permission = 
  | 'inventory:read' 
  | 'inventory:write' 
  | 'inventory:delete' 
  | 'users:read' 
  | 'users:write' 
  | 'users:delete' 
  | 'audit:read';

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  centerId?: string;
  createdAt: Timestamp;
  permissions?: Permission[];
}

export interface Center {
  id: string;
  name: string;
  adminEmail: string;
  createdAt: Timestamp;
}

export type InventoryCategory = 'Tables' | 'Counters' | 'PCs' | 'Printers' | 'Networking' | 'Other';
export type InventoryCondition = 'New' | 'Used' | 'Damaged';
export type InventoryStatus = 'Active' | 'Inactive';

export interface InventoryItem {
  id: string;
  name: string;
  category: InventoryCategory;
  quantity: number;
  condition: InventoryCondition;
  purchaseDate?: string;
  vendorName?: string;
  centerId: string;
  status: InventoryStatus;
  updatedAt: Timestamp;
}

export interface AuditLog {
  id: string;
  userId: string;
  userEmail: string;
  action: string;
  targetId: string;
  targetType: 'inventory' | 'user' | 'center';
  centerId?: string;
  timestamp: Timestamp;
  details?: any;
}
