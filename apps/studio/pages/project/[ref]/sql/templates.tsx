import { observer } from 'mobx-react-lite'
import type { NextPageWithLayout } from 'types'
import { SQLEditorLayout } from 'components/layouts'
import SQLTemplates from 'components/interfaces/SQLEditor/SQLTemplates/SQLTemplates'

const SqlEditorWelcome: NextPageWithLayout = () => {
  return <SQLTemplates />
}

SqlEditorWelcome.getLayout = (page) => <SQLEditorLayout title="SQL">{page}</SQLEditorLayout>

export default observer(SqlEditorWelcome)
