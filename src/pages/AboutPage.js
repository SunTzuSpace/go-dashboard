import React, { useEffect } from 'react'
import 'feather-icons'

import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween } from '../components/Row'
import Search from '../components/Search'
import { useMedia } from 'react-use'
import styled from 'styled-components'
import { Divider } from '../components'
import Link from '../components/Link'


function AllTokensPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const below600 = useMedia('(max-width: 800px)')
  document.title = `TVL Rankings - SunTzu`;
  const DashGrid = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    grid-template-areas: 'account';
    padding: 0 4px;

    > * {
      justify-content: flex-end;
    }
  `
  return (
    <PageWrapper>
      <FullWrapper>
        <RowBetween>
          <TYPE.largeHeader>About</TYPE.largeHeader>
          {!below600 && <Search small={true} />}
        </RowBetween>
        <Panel style={{ marginTop: '6px', padding: below600 && '1rem 0 0 0 ' }}>
        <DashGrid center={true} style={{ height: 'fit-content', padding: '0 0 1rem 0' }}>
          <TYPE.main area="account">Why SunTzu? <span  role="img" aria-label="katana emoji">🗡️</span></TYPE.main>
          <Divider />

          <TYPE.light>SunTzuSpace is committed to accurate data without ads or sponsored content and transparency.</TYPE.light>
          <TYPE.light>We list cryptography projects, strategies, oracles and bridges.</TYPE.light>
          <Divider />

          <TYPE.light>Thanks to <Link href="https://www.gitcoin.co/grants">Gitcoin.co</Link>, <Link href="https://thegraph.com//">The Graph Protocol</Link></TYPE.light>

          <Divider />
          <TYPE.light>Based on <Link href="https://github.com/Uniswap/uniswap-info">Uniswap.info</Link> and its fork <Link href="https://github.com/DefiLlama/defillama-app">defillama.com</Link></TYPE.light>
          <Divider />
          <TYPE.light>Contact us on <Link href="https://twitter.com/suntzuspace">Twitter</Link>, @suntzuspace on <Link href="https://t.me/codingsh">Telegram</Link>  or  codingsh@pm.me</TYPE.light>
          <Divider />

        </DashGrid>
        </Panel>
      </FullWrapper>
    </PageWrapper>
  )
}

export default AllTokensPage
