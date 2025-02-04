import { getCachedGlobal } from '../utilities/getGlobals'
import { HeaderClient } from './Component.client'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  console.log('headerData', headerData.navItems)

  return <HeaderClient data={headerData} />
}
