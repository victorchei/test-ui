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

export const defaultGroup = 'Інші помилки в оформлені роботи'
export const defaultRule = 'Інші група помилок'

export const errorMapper: ErrorMapper = {
  title: {
    [ERROR_TYPE.frame]: 'Помилки оформлення рамки',
    [ERROR_TYPE.referenceList]: 'Помилки в списку використаних джерел',
    [ERROR_TYPE.pagesFidelity]: 'Помилки в  змісті',
    [ERROR_TYPE.picturesAndTables]: 'Помилки надписів рисунків та таблиць',
    [ERROR_TYPE.referenceOrder]: 'Помилки порядку літературних джерел в роботі',
    [ERROR_TYPE.abbreviation]: 'Помилки в абривіатурах',
    [ERROR_TYPE.addition]: 'Помилки в додатках',
  },
  [ERROR_TYPE.referenceList]: {
    [REF_LIST_KEYS.rule0]: 'Неправильна назва у СПИСКУ ВИКОРИСТАНИХ ДЖЕРЕЛ',
    [REF_LIST_KEYS.rule1]: 'Кількість використаних джерел',
    [REF_LIST_KEYS.rule2]: 'Неправильний порядок джерел',
    [REF_LIST_KEYS.rule3]: 'Неправильна нумерація джерел',
    [REF_LIST_KEYS.rule4]: 'Відсутні обовязкові атрибути у джерелах',
    [REF_LIST_KEYS.rule5]: 'Відсутні обовязкові атрибути у джерелах',
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
    [PAGES_FIDELITY_ERROR_KEYS.rule7]: 'Неправильний символ у нумерація підрозділів',
    [PAGES_FIDELITY_ERROR_KEYS.rule8]: 'Відсутні висновки до розділу',
    [PAGES_FIDELITY_ERROR_KEYS.rule10]: 'Відсутній елемент змісту',
    [PAGES_FIDELITY_ERROR_KEYS.rule10_1]: 'Неправильний порядок',
    [PAGES_FIDELITY_ERROR_KEYS.rule11]: 'Неспівпадіння в назвах',
    [PAGES_FIDELITY_ERROR_KEYS.rule12]: 'Неспівпадіння в регістрі назв',
  },
  [ERROR_TYPE.frame]: {
    [FRAME_ERROR_KEYS.rule1]: 'Невірний номер сторінки',
    [FRAME_ERROR_KEYS.rule2]: 'Неправильно вказана загальна к-сть сторінок',
    [FRAME_ERROR_KEYS.rule3]: 'Не заповнені поля',
    [FRAME_ERROR_KEYS.rule4]: 'Не відповідність полів',
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
    [PICTURES_TABLES_ERROR_KEYS.rule0]: 'Інші група помилок',
    [PICTURES_TABLES_ERROR_KEYS.rule1]: 'Неправильний порядок посилань',
    [PICTURES_TABLES_ERROR_KEYS.rule2]: 'Неправильний порядок нумерації підписів',
    [PICTURES_TABLES_ERROR_KEYS.rule4]: 'Неправильний формат писилання на рисунок',
    [PICTURES_TABLES_ERROR_KEYS.rule5]: 'Неправильний формат писилання на таблицю',
  },
}
