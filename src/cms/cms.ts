import CMS, { init } from 'netlify-cms'
// import AboutPagePreview from './preview-templates/AboutPagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
import {IndexPagePreview} from './preview-templates/IndexPagePreview'
import { config } from './config';

init({config})

// @ts-ignore
import styles from '!css-loader!sass-loader!../styles/index.scss'
CMS.registerPreviewStyle(styles.toString(), { raw: true })
CMS.registerPreviewStyle(`.frame-content { background: var(--colors-background); }`, { raw: true })

CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
