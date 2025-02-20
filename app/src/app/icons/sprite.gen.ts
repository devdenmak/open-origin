export interface SpritesMap {
  filled:
    | 'candles'
    | 'caret-down'
    | 'caret-left'
    | 'caret-right'
    | 'caret-up'
    | 'check-round'
    | 'community'
    | 'crown'
    | 'dark'
    | 'downloads'
    | 'edit'
    | 'eye-off'
    | 'eye-on'
    | 'fire'
    | 'flash'
    | 'github'
    | 'grid-view'
    | 'handbook'
    | 'history'
    | 'light'
    | 'liked'
    | 'linkedin'
    | 'list-view'
    | 'list'
    | 'location'
    | 'lock'
    | 'map'
    | 'microphone'
    | 'models'
    | 'notification-bell'
    | 'platform'
    | 'profile'
    | 'projects'
    | 'question-mark-single'
    | 'question-mark'
    | 'settings'
    | 'sheets'
    | 'shop'
    | 'snake'
    | 'sort'
    | 'speech-bubble'
    | 'star'
    | 'subscribe'
    | 'technical'
    | 'telegram'
    | 'to'
    | 'token'
    | 'twitter'
    | 'user'
    | 'users'
    | 'wand-magic-sparkles'
    | 'warning'
  outlined:
    | 'add'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-up'
    | 'attention'
    | 'back'
    | 'burger'
    | 'calendar'
    | 'camera'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'clock'
    | 'copy'
    | 'cross'
    | 'crown'
    | 'cursor'
    | 'destination'
    | 'doc-success'
    | 'double-chevron-left'
    | 'double-chevron-right'
    | 'download'
    | 'edit'
    | 'event-history'
    | 'expand'
    | 'export'
    | 'fav'
    | 'file'
    | 'filter'
    | 'filters-act'
    | 'filters'
    | 'flag'
    | 'flash'
    | 'folder'
    | 'info'
    | 'like'
    | 'link'
    | 'log-out'
    | 'loyalty'
    | 'mail-success'
    | 'mail'
    | 'map'
    | 'minus'
    | 'notification'
    | 'paperclip'
    | 'photo'
    | 'picture'
    | 'pin'
    | 'plus'
    | 'price-down'
    | 'question'
    | 'refresh'
    | 'search'
    | 'settings'
    | 'share'
    | 'sheet'
    | 'six-dots'
    | 'sort-act'
    | 'sort'
    | 'stats'
    | 'support'
    | 'text-bubble'
    | 'three-dots-vert'
    | 'three-dots'
    | 'tick'
    | 'timer'
    | 'trash'
    | 'unlink'
    | 'user-edit'
    | 'user-profile'
    | 'user'
    | 'wallet'
    | 'web'
    | 'zoom-in'
    | 'zoom-out'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  filled: {
    filePath: 'filled.e53972e3.svg',
    items: {
      candles: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'caret-down': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'caret-left': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'caret-right': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'caret-up': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'check-round': {
        viewBox: '0 0 13 13',
        width: 13,
        height: 13,
      },
      community: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      crown: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      dark: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      downloads: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      edit: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'eye-off': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'eye-on': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      fire: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      flash: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      github: {
        viewBox: '0 0 23 23',
        width: 23,
        height: 23,
      },
      'grid-view': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      handbook: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      history: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      light: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      liked: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      linkedin: {
        viewBox: '0 0 22 23',
        width: 22,
        height: 23,
      },
      'list-view': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      list: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      location: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      lock: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      map: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      microphone: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      models: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'notification-bell': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      platform: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      profile: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      projects: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'question-mark-single': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'question-mark': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      settings: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      sheets: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      shop: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      snake: {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30,
      },
      sort: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'speech-bubble': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      star: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      subscribe: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      technical: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      telegram: {
        viewBox: '0 0 23 23',
        width: 23,
        height: 23,
      },
      to: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      token: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      twitter: {
        viewBox: '0 0 23 23',
        width: 23,
        height: 23,
      },
      user: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      users: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'wand-magic-sparkles': {
        viewBox: '0 0 18 16',
        width: 18,
        height: 16,
      },
      warning: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
    },
  },
  outlined: {
    filePath: 'outlined.36195bd8.svg',
    items: {
      add: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'arrow-down': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'arrow-left': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'arrow-right': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'arrow-up': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      attention: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      back: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      burger: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      calendar: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      camera: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'chevron-down': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'chevron-left': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'chevron-right': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'chevron-up': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      clock: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      copy: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      cross: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      crown: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      cursor: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      destination: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'doc-success': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'double-chevron-left': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'double-chevron-right': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      download: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      edit: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'event-history': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      expand: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      export: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      fav: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      file: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      filter: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'filters-act': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      filters: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      flag: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      flash: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      folder: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      info: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      like: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      link: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'log-out': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      loyalty: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'mail-success': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      mail: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      map: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      minus: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      notification: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      paperclip: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      photo: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      picture: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      pin: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      plus: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'price-down': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      question: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      refresh: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      search: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      settings: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      share: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      sheet: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'six-dots': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'sort-act': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      sort: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      stats: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      support: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'text-bubble': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'three-dots-vert': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'three-dots': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      tick: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      timer: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      trash: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      unlink: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'user-edit': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'user-profile': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      user: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      wallet: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      web: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'zoom-in': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'zoom-out': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
    },
  },
}
