export interface InventoryProduct
{
    id: string;
    // category?: string;
    name: string;
    namehall: string;
    description?: string;
    spacetotal: number;
    spacestock: number;
    address: string;
    // tags?: string[];
    // sku?: string | null;
    // barcode?: string | null;
    // brand?: string | null;
    // vendor: string | null;
    stock: number;
    // reserved: number;
    costtranslation: number;
    // basePrice: number;
    // taxPercent: number;
     phone: number;
    // weight: number;
    // thumbnail: string;
    images: string;
    active: boolean;
}

export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

// export interface InventoryCategory
// {
//     id: string;
//     parentId: string;
//     name: string;
//     slug: string;
// }

// export interface InventoryBrand
// {
//     id: string;
//     name: string;
//     slug: string;
// }

// export interface InventoryTag
// {
//     id?: string;
//     title?: string;
// }

// export interface InventoryVendor
// {
//     id: string;
//     name: string;
//     slug: string;
// }
