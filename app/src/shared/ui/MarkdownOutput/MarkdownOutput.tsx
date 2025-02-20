'use client'

import Markdown from 'react-markdown'

export type IMarkdownOutputProps = {
  description?: string
}

const LinkRenderer = (props: { href?: string; children?: React.ReactNode }) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  )
}

const MarkdownOutput = ({ description = '' }: IMarkdownOutputProps) => {
  return (
    <Markdown
      components={{ a: LinkRenderer }}
      skipHtml
      allowedElements={['a', 'p']}
      className="prose prose-open-origin max-w-none leading-normal"
    >
      {description}
    </Markdown>
  )
}

export default MarkdownOutput
