import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import { TreeView } from '@mui/x-tree-view/TreeView'
import React from 'react'
import { defaultGroup, defaultRule, errorMapper } from 'src/config/errorsConfig'
import { ErrorsType } from 'src/validator/src/types'

type Props = { errorsData: ErrorsType }

export default function ControlledTreeView({ errorsData }: Props) {
  const blocks = Object.entries(errorsData).filter(([key, value]) => value)

  return (
    <TreeView aria-label="controlled" defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
      {blocks.map(([key, value]) => (
        <TreeItem nodeId={key} label={errorMapper.title[key] ?? defaultGroup} key={key}>
          {Object.entries(value).map(([item, arr], j) => (
            <TreeItem
              nodeId={key + item}
              label={errorMapper[key] ? errorMapper[key][item] ?? defaultRule : defaultRule}
              key={key + item}
            >
              {arr.map((error, i) => (
                <TreeItem nodeId={error} label={error} key={key + i} />
              ))}
            </TreeItem>
          ))}
        </TreeItem>
      ))}
    </TreeView>
  )
}
