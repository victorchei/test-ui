export type StartConfig = {
  isFrame: boolean
  refListMinLen: number
  chapterSize: [number, number]
  isChapterConclusionRequired: boolean
  frameConfig: {
    mainFramePageNum: number
    maidField1: boolean
    maidField2: boolean
    maidField3: boolean
    maidField4: boolean
    maidField5: boolean
    maidField6: string
    maidField7: boolean
    maidField8: boolean
    maidField9: boolean
    maidField10: boolean
    smallField1: boolean
    smallField2: boolean
    smallField3: string
    smallField4: boolean
  }
}

export const getStartConfig = (isMaster: boolean, groupName: string): StartConfig => {
  const prfCode = `${groupName}.КР.${isMaster ? 'М' : 'Б'} – 121 – 23 - ПЗ`
  return {
    refListMinLen: 0,
    chapterSize: [1, 5],
    isChapterConclusionRequired: true,
    isFrame: !isMaster,
    frameConfig: {
      mainFramePageNum: 4,
      maidField1: true,
      maidField2: true,
      maidField3: false,
      maidField4: false,
      maidField5: false,
      maidField6: prfCode,
      maidField7: true,
      maidField8: true,
      maidField9: true,
      maidField10: true,
      smallField1: true,
      smallField2: true,
      smallField3: prfCode,
      smallField4: true,
    },
  }
}
