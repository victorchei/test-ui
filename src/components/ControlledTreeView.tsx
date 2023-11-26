import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import { TreeView } from '@mui/x-tree-view/TreeView'
import React from 'react'
import { errorMapper } from 'src/config/errorsConfig'
import { ErrorsType } from 'src/validator/src/errors'

type Props = { errorsData: ErrorsType }

export default function ControlledTreeView({ errorsData }: Props) {
  const blocks = Object.entries(errorsData).filter(([key, value]) => value)

  // to expand all nodes by default
  // const defaultExpanded = blocks.reduce((acc, [key, obj]) => {
  //   acc.push(key)
  //   Object.keys(obj).forEach((item) => acc.push(key + item))
  //   return acc
  // }, [] as string[])

  const defaultGroup = 'Інші помилки в оформлені рпоботи'
  const defaultRule = 'Інші група помилок'
  return (
    <TreeView
      aria-label="controlled"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      // defaultExpanded={defaultExpanded}
    >
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
