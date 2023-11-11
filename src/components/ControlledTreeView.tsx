import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import { TreeView } from '@mui/x-tree-view/TreeView'
import React from 'react'
import { ErrorsType } from 'src/validator/src/errors'

type Props = { errorsData: ErrorsType }

type ErrorMapper = {
  title: Record<string, string>
  [key: string]: {
    [item: string]: string
  }
}

const errorMapper: ErrorMapper = {
  title: {
    frame: 'Помилки оформлення рамки',
    referenceList: 'Помилки в списку використаних джерел',
    pagesFidelity: 'Помилки в  змісті',
    picturesAndTables: 'Помилки надписів рисунків та таблиці',
    referenceOrder: 'Помилки порядку літературних джерел в роботі',
    abbreviation: 'Помилки в абривіатурах',
  },
  referenceList: {
    rule0: 'Неправильна назва у Списку використаних джерел',
    rule1: 'Кількість використаних джерел',
    rule2: 'Непправильний порядок джерел',
    rule3: 'Неправильна нумерація джерел',
    rule4: 'Відсутні обовязкові атрибути у джерелах',
    rule5: 'Відсутні обовязкові атрибути у джерелах',
  },
  referenceOrder: {
    rule1: 'Неправильний формат чисел',
    rule2: 'Помилка в розділових знаках перед джерелом',
    rule3: 'Не може бути джерело після крапки або коми',
    rule4: 'Помилка в розділових знаках після джерела',
    rule5: 'Порядок вживання літературних джерел',
    rule6: 'Літературні джерела без посилань',
  },
  pagesFidelity: {
    rule1: 'Неправильно оформлений зміст',
    rule2: 'Неправильний регістр',
    rule3: 'Неправильна нумерація розділів',
    rule4: 'Неправильна нумерація підрозділів',
    rule5: 'Неправильно кількість підрозділів',
    rule6: 'Неправильно оформлоена нумерація підрозділів',
    rule7: 'Неправильний символ у нумерація підрозділів',
    rule8: 'Відсутні висновки підрозділу',
    rule9: 'Відсутні висновки розділу',
    rule10: 'Відсутній елемент змісту',
    rule10_1: 'Неправильний порядок',
    rule11: 'Неспівпадіння в назвах',
    rule12: 'Неспівпадіння в регістрі назв',
  },
}

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
