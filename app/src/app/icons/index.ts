import { SPRITES_META, SpritesMap } from './sprite.gen'

export type AnyIconName = { [Key in keyof SpritesMap]: IconName<Key> }[keyof SpritesMap]
export type IconName<Key extends keyof SpritesMap> = `${Key}/${SpritesMap[Key]}`

export const getAllIconsNames = () =>
  Object.keys(SPRITES_META)
    .map((spriteName) =>
      Object.keys(SPRITES_META[spriteName as keyof SpritesMap].items).map(
        (iconName) => `${spriteName}/${iconName}`,
      ),
    )
    .flat() as AnyIconName[]

export const getIconMeta = <Key extends keyof SpritesMap>(name: IconName<Key>) => {
  const [spriteName, iconName] = name.split('/') as [Key, SpritesMap[Key]]
  const {
    filePath,
    items: {
      [iconName]: { viewBox, width, height },
    },
  } = SPRITES_META[spriteName]
  const axis = width === height ? 'xy' : width > height ? 'x' : 'y'

  return { filePath, iconName, viewBox, axis }
}
