import { Post } from "~/types"

export function countTotalPage(page:number, arr: Post[]) {
    return page = Math.ceil(arr.length/10)
}