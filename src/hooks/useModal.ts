import { ref } from 'vue'

export function useModal () {
  const showModal = ref(false)

  const toggleModal = () => showModal.value = !showModal.value

  return {
    showModal,
    toggleModal
  }
}