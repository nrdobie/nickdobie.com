import { faMapMarkerAlt, faPhone, faAt } from "@fortawesome/pro-solid-svg-icons";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";

export type SocialType = 'location' | 'phone' | 'email' | 'github' | 'codepen'

export function getIcon(type: SocialType) {
  switch (type) {
    case 'location':
      return faMapMarkerAlt
    case 'phone':
      return faPhone
    default:
    case 'email':
      return faAt
    case 'github':
      return faGithub
    case 'codepen':
      return faCodepen
  }
}

export function getUrl(type: SocialType, account: string) {
  switch (type) {
    default:
    case 'location':
      return null
    case 'phone':
      return `tel:${account.replace(/[^\d\+]/g, "")}`
    case 'email':
      return `mailto:${account}`
    case 'github':
      return `https://github.com/${account}`
    case 'codepen':
      return `https://codepen.io/${account}`
  }
}

export function getDisplay(type: SocialType, account: string) {
  switch (type) {
    default:
    case 'location':
    case 'phone':
    case 'email':
      return account
    case 'github':
      return `github.com/${account}`
    case 'codepen':
      return `codepen.io/${account}`
  }
}

export function getLabel(type: SocialType) {
  switch (type) {
    case 'location':
      return 'Location'
    case 'phone':
      return 'Phone'
    case 'email':
      return 'E-Mail'
    case 'github':
      return 'Github'
    case 'codepen':
      return 'CodePen'
  }
}