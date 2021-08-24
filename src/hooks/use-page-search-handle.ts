import { ref } from "vue"
import PageContent from "@/components/page-content"
import { IFormData } from "@/components/page-search"

// 将与pageSearch的搜索与清空按钮等相关逻辑抽取成一个hook
export default function usePageSearchHandle() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  function handleSearch(formData: IFormData) {
    pageContentRef.value?.getPageListByPageName(formData)
  }
  function handleReset() {
    pageContentRef.value?.getPageListByPageName()
  }
  return {
    handleSearch,
    handleReset,
    pageContentRef
  }
}
