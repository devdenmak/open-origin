'use client'

import { useTranslations } from 'next-intl'
import { useFormState, useFormStatus } from 'react-dom'
import { useToggle } from 'react-use'

import { Button } from '@/src/shared/ui/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/shared/ui/Dialog'
import { Icon } from '@/src/shared/ui/Icon'

import { deleteModel } from '../api'

const DeleteModelDialog = ({ id }: { id: string }) => {
  const t = useTranslations('MyModelsPage')

  const [on, toggle] = useToggle(false)
  const [, actionDelete] = useFormState(deleteModel, null)

  const handleAction = () => {
    actionDelete({ id })
    toggle(false)
  }

  return (
    <Dialog open={on} onOpenChange={toggle}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-md text-red-strong transition-colors hover:bg-surface-secondary active:bg-transparent"
        >
          <Icon name="outlined/trash" className="text-xs" />
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('deleteModel')}</DialogTitle>
          <DialogDescription>{t('deleteDialogText')}</DialogDescription>
        </DialogHeader>

        <form action={() => handleAction()}>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-full" size="lg" type="button" variant="third">
                {t('deleteDialogClose')}
              </Button>
            </DialogClose>

            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

const SubmitButton = () => {
  const t = useTranslations('MyModelsPage')
  const { pending } = useFormStatus()

  return (
    <Button loading={pending} className="w-full" size="lg" type="submit" variant="secondary">
      {t('deleteDialogConfirm')}
    </Button>
  )
}

export default DeleteModelDialog
