import React from 'react'
import { Container } from '@mui/material'
import { UBTextArea } from '../../../common/Textarea/UBTextArea'

export const AnnualAcademicReportStep1 = () => {
    const question = ''
    const handleSetAnswer = () => {}

    return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
        <UBTextArea question={question} setAnswer={handleSetAnswer}  />
    </Container>)
}

export default AnnualAcademicReportStep1