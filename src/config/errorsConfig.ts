import {
  ABBR_ERROR_KEYS,
  ERROR_TYPE,
  FRAME_ERROR_KEYS,
  PAGES_FIDELITY_ERROR_KEYS,
  PICTURES_TABLES_ERROR_KEYS,
  REF_LIST_KEYS,
  REF_ORDER_ERROR_KEYS,
} from 'src/validator/src/config/enums'

type ErrorMapper = {
  title: Record<string, string>
  [key: string]: {
    [item: string]: string
  }
}

export const defaultGroup = 'Інші помилки в оформленні роботи'
export const defaultRule = 'Інша група помилок'

export const errorMapper: ErrorMapper = {
  title: {
    [ERROR_TYPE.frame]: 'Помилки при оформленні рамки',
    [ERROR_TYPE.referenceList]: 'Помилки в списку використаних джерел',
    [ERROR_TYPE.pagesFidelity]: 'Помилки в змісті',
    [ERROR_TYPE.picturesAndTables]: 'Помилки підписів до рисунків і таблиць',
    [ERROR_TYPE.referenceOrder]: 'Помилки порядку літературних джерел в роботі',
    [ERROR_TYPE.abbreviation]: 'Помилки в абревіатурах',
    [ERROR_TYPE.addition]: 'Помилки в додатках',
  },
  [ERROR_TYPE.referenceList]: {
    [REF_LIST_KEYS.rule0]: 'Неправильна назва у СПИСКУ ВИКОРИСТАНИХ ДЖЕРЕЛ',
    [REF_LIST_KEYS.rule1]: 'Кількість використаних джерел',
    [REF_LIST_KEYS.rule2]: 'Неправильний порядок джерел',
    [REF_LIST_KEYS.rule3]: 'Неправильна нумерація джерел',
    [REF_LIST_KEYS.rule4]: `Відсутні обов'язкові атрибути у джерелах`,
    [REF_LIST_KEYS.rule5]: `Відсутні обовя'зкові атрибути у джерелах`,
  },
  [ERROR_TYPE.referenceOrder]: {
    [REF_ORDER_ERROR_KEYS.rule1]: 'Неправильний формат чисел',
    [REF_ORDER_ERROR_KEYS.rule2]: 'Помилка в розділових знаках перед джерелом',
    [REF_ORDER_ERROR_KEYS.rule3]: 'Не може бути джерело після крапки або коми',
    [REF_ORDER_ERROR_KEYS.rule4]: 'Помилка в розділових знаках після джерела',
    [REF_ORDER_ERROR_KEYS.rule5]: 'Порядок вживання літературних джерел',
    [REF_ORDER_ERROR_KEYS.rule6]: 'Літературні джерела без посилань',
  },
  [ERROR_TYPE.pagesFidelity]: {
    [PAGES_FIDELITY_ERROR_KEYS.rule1]: 'Неправильно оформлений зміст',
    [PAGES_FIDELITY_ERROR_KEYS.rule2]: 'Неправильний регістр',
    [PAGES_FIDELITY_ERROR_KEYS.rule3]: 'Неправильна нумерація розділів',
    [PAGES_FIDELITY_ERROR_KEYS.rule4]: 'Неправильна нумерація підрозділів',
    [PAGES_FIDELITY_ERROR_KEYS.rule5]: 'Неправильнa кількість підрозділів',
    [PAGES_FIDELITY_ERROR_KEYS.rule6]: 'Неправильно оформлена нумерація підрозділів',
    [PAGES_FIDELITY_ERROR_KEYS.rule7]: 'Неправильний символ у нумерації підрозділів',
    [PAGES_FIDELITY_ERROR_KEYS.rule8]: 'Відсутні висновки до розділу',
    [PAGES_FIDELITY_ERROR_KEYS.rule10]: 'Відсутній елемент змісту',
    [PAGES_FIDELITY_ERROR_KEYS.rule10_1]: 'Неправильний порядок',
    [PAGES_FIDELITY_ERROR_KEYS.rule11]: 'Неспівпадіння в назвах',
    [PAGES_FIDELITY_ERROR_KEYS.rule12]: 'Неспівпадіння в регістрі назв',
  },
  [ERROR_TYPE.frame]: {
    [FRAME_ERROR_KEYS.rule1]: 'Невірний номер сторінки',
    [FRAME_ERROR_KEYS.rule2]: 'Неправильно вказана загальна кількість сторінок',
    [FRAME_ERROR_KEYS.rule3]: 'Незаповнені поля',
    [FRAME_ERROR_KEYS.rule4]: 'Невідповідність полів',
  },
  [ERROR_TYPE.abbreviation]: {
    [ABBR_ERROR_KEYS.rule1]: 'Неправильне розташування',
    [ABBR_ERROR_KEYS.rule2]: 'Неправильний порядок',
    [ABBR_ERROR_KEYS.rule3]: 'Неправильний символ',
    [ABBR_ERROR_KEYS.rule4]: 'Відсутнє посилання',
  },
  [ERROR_TYPE.addition]: {
    [PAGES_FIDELITY_ERROR_KEYS.rule1]: 'Неправильний порядок',
    [PAGES_FIDELITY_ERROR_KEYS.rule2]: 'Неправильний підпис',
  },
  [ERROR_TYPE.picturesAndTables]: {
    [PICTURES_TABLES_ERROR_KEYS.rule1]: 'Неправильний порядок посилань',
    [PICTURES_TABLES_ERROR_KEYS.rule2]: 'Неправильний порядок нумерації підписів',
    [PICTURES_TABLES_ERROR_KEYS.rule3]: 'Неправильний підпис',
    [PICTURES_TABLES_ERROR_KEYS.rule4]: 'Неправильний формат посилання на рисунок',
    [PICTURES_TABLES_ERROR_KEYS.rule5]: 'Неправильний формат посилання на таблицю',
  },
}
