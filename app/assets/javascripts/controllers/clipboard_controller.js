import { Controller } from "stimulus"

export default class extends Controller {
  static values = { copy: String }
  static targets = [ "notice" ]

  copy(event) {
    navigator.clipboard.writeText(this.copyValue)
    const notice = `
      <span data-clipboard-target="notice" class="fixed ml-2 p-1 bg-white">
        Copied! ✅
      </span>
    `
    event.target.insertAdjacentHTML("afterend", notice)
    setTimeout(() => { this.noticeTarget.remove() }, 1000)
  }
}
