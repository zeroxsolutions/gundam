import React from "react"

export type DatePickerContextType = {}

export const DatePickerContext =
  React.createContext<DatePickerContextType | null>(null)

export type DatePickerProviderProps = {
  value: DatePickerContextType | null
  children: React.ReactNode
}

export function useDatePicker(): DatePickerContextType {
  const context: DatePickerContextType | null =
    React.useContext<DatePickerContextType | null>(DatePickerContext)
  if (!context) {
    throw new Error("useDatePicker() require inner a DatePicker")
  }
  return context
}

export const DatePickerProvider: React.FC<DatePickerProviderProps> = ({
  value,
  children,
}: DatePickerProviderProps): React.ReactNode => {
  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  )
}
