import changeCase from "change-case";
import { illustrations } from "../illustrations";

const illustrationsOptionsList = Object.keys(illustrations).map(i => ({
  label: changeCase.title(i),
  value: i
}));

export const config = {
  load_config_file: false,
  backend: { name: "git-gateway", branch: "master" },
  media_folder: "static/assets",
  public_folder: "/assets",
  publish_mode: "editorial_workflow",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          file: "src/pages/index.md",
          label: "Home Page",
          name: "index",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "index-page"
            },
            { label: "Title", name: "title", widget: "string" },
            { label: "Subtitle", name: "subtitle", widget: "string" },
            { label: "Hero Image", name: "heroImage", widget: "image" },
            {
              label: "Hero Image Credit",
              name: "heroImageCredit",
              widget: "object",
              fields: [
                { label: "Author", name: "author", widget: "string" },
                { label: "Link", name: "link", widget: "string" }
              ]
            },
            {
              label: "About",
              name: "about",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  default: "<about-me>",
                  widget: "string"
                },
                { label: "Text", name: "text", widget: "text" },
                {
                  label: "Illustration",
                  name: "illustration",
                  widget: "select",
                  options: illustrationsOptionsList
                }
              ]
            },
            {
              label: "Highlights",
              name: "highlights",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  default: "My Skills",
                  widget: "string"
                },
                {
                  label: "Items",
                  name: "items",
                  widget: "list",
                  allow_add: true,
                  fields: [
                    { label: "Skill", name: "title", widget: "string" },
                    { label: "Text", name: "text", widget: "text" },
                    {
                      label: "Illustration",
                      name: "illustration",
                      widget: "select",
                      options: illustrationsOptionsList
                    }
                  ]
                }
              ]
            },
            {
              label: "Skills",
              name: "skills",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  default: "<skills>",
                  widget: "string"
                },
                {
                  label: "Items",
                  name: "items",
                  allow_add: true,
                  widget: "list",
                  fields: [
                    {
                      label: "Title",
                      name: "title",
                      widget: "string"
                    },
                    {
                      label: "Items",
                      name: "items",
                      allow_add: true,
                      widget: "list",
                      field: "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "data",
      label: "Data",
      extension: "yml",
      preview: false,
      files: [
        {
          file: "src/_data/contacts/index.yml",
          label: "Contact",
          name: "contact",
          fields: [
            {
              label: "Accounts",
              name: "accounts",
              widget: "list",
              allow_add: true,
              fields: [
                {
                  label: "Type",
                  name: "type",
                  widget: "select",
                  options: [
                    { label: "Location", value: "location" },
                    { label: "Phone", value: "phone" },
                    { label: "E-Mail", value: "email" },
                    { label: "GitHub", value: "github" },
                    { label: "CodePen", value: "codepen" },
                    { label: "LinkedIn", value: "linkedin" },
                    { label: "Twitter", value: "twitter" },
                    { label: "Facebook", value: "facebook" },
                    { label: "Medium", value: "medium" }
                  ]
                },
                {
                  label: "Account",
                  name: "account",
                  widget: "string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
