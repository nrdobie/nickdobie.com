import { faMapMarkerAlt, faPhone, faAt } from "@fortawesome/pro-solid-svg-icons";
import { faGithub, faCodepen, faLinkedin, faTwitter, faFacebookF, faMediumM } from "@fortawesome/free-brands-svg-icons";

export type SocialType = 'location' | 'phone' | 'email' | 'github' | 'codepen' | 'linkedin' | 'twitter' | 'facebook' | 'medium'

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
    case 'linkedin':
      return faLinkedin
    case 'twitter':
      return faTwitter
    case 'facebook':
      return faFacebookF
    case 'medium':
      return faMediumM
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
    case 'linkedin':
      return `https://www.linkedin.com/in/${account}/`
    case 'twitter':
      return `https://twitter.com/${account}`
    case 'facebook':
      return `https://www.facebook.com/${account}`
    case 'medium':
      return `https://medium.com/${account}`
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
    case 'linkedin':
      return `linkedin.com/${account}`
    case 'twitter':
    case 'facebook':
      return `@${account}`
    case 'medium':
      return `medium.com/${account}`
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
    case "linkedin":
      return 'LinkedIn'
    case 'twitter':
      return 'Twitter'
    case 'facebook':
      return 'Facebook'
    case 'medium':
      return 'Medium'
  }
}