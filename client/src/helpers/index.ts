import { CategoryType } from "../store/categoryStore/reducer";

export const setCategoriesOptions = (data: Array<CategoryType>) => {
    const options = data && data.map((category: CategoryType)=>({value: category._id, label: category.name }))

    return options || [];
}