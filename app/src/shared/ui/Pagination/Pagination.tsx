'use client'

import cn from 'clsx'
import ReactPaginate from 'react-paginate'

import { Icon } from '../Icon'

export type IProps = {
  className?: string
  currentPage?: number | null
  lastPage?: number | null
  onChange: (val: number) => void
}

const Pagination = ({ className, currentPage, lastPage, onChange }: IProps) => {
  const handleChange = (selected: number) => {
    onChange(Number(selected))
  }

  return (
    <div className={cn(className)}>
      <ReactPaginate
        forcePage={Number(currentPage) - 1}
        breakLabel={<span>...</span>}
        pageCount={Number(lastPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={({ selected }) => handleChange(Number(selected) + 1)}
        disableInitialCallback
        // styles
        containerClassName="flex gap-1"
        breakLinkClassName="size-10 flex items-center justify-center text-text-fourth transition-colors select-none hover:text-button-eighth active:text-text-fourth"
        pageLinkClassName="size-10 flex items-center justify-center font-main text-base font-medium text-text-fourth border border-transparent bg-transparent rounded-full select-none transition-colors hover:text-button-eighth active:text-text-fourth"
        activeLinkClassName="!bg-surface-fifth !border-supportive-primary !text-text-primary pointer-events-none"
        previousLinkClassName="flex items-center justify-center size-10 text-text-primary transition-colors hover:text-button-eighth active:text-text-primary"
        nextLinkClassName="flex items-center justify-center size-10 text-text-primary transition-colors hover:text-button-eighth active:text-text-primary"
        disabledLinkClassName="!text-text-fourth pointer-events-none"
        // arrows
        previousLabel={<Icon name="outlined/chevron-left" />}
        nextLabel={<Icon name="outlined/chevron-right" />}
      />
    </div>
  )
}

export default Pagination
