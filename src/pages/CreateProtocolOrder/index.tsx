import Calendar from 'react-calendar'

import { Header } from "../../Components/Header";
import { ButtonContainer, CalendarContainer, FormContainer, MainContainer, ScreenContainer } from "./styles";

import 'react-calendar/dist/Calendar.css' 

import { useState } from 'react'
import { FormProtocol } from '../../Components/FormProtocol';

type ValuePiece = Date | null

type value = ValuePiece | [ ValuePiece, ValuePiece ]

export function CreateProtocolOrder() {
    const [value, setValue] = useState<value>(new Date())

    return (
        <>
            <Header />
            <MainContainer>
                <ScreenContainer>
                    <FormContainer>
                        <FormProtocol />
                    </FormContainer>
                    <CalendarContainer>
                        <ButtonContainer href='/home'>Voltar</ButtonContainer>
                        <ButtonContainer>Criar Ordem</ButtonContainer>
                        <h4>Definir Data limite</h4>
                        <Calendar
                            onChange={setValue}
                            value={value}
                        />
                    </CalendarContainer>
                </ScreenContainer>
            </MainContainer>
        </>
    )
}