import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Platform } from 'react-native';

type Props = {
  title: string;
  handleChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
  isDatePicker?: boolean;
  isTimePicker?: boolean;
};

const FormField = ({
  title,
  value,
  handleChangeText,
  placeholder,
  isDatePicker = false,
  isTimePicker = false,
}: Props) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleDateTimeChange = (event: any, date?: Date) => {
    setShowPicker(false);
    if (date) {
      setSelectedDateTime(date);

      if (isTimePicker) {
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        handleChangeText?.(time);
      } else if (isDatePicker) {
        const formattedDate = date.toLocaleDateString();
        handleChangeText?.(formattedDate);
      }
    }
  };

  const displayPicker = () => (
    <DateTimePicker
      value={selectedDateTime || new Date()}
      mode={isDatePicker ? 'date' : 'time'}
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      onChange={handleDateTimeChange}
    />
  );

  return (
    <View className="space-y-2">
      <Text className="font-pmedium text-base text-[#006D77]">{title}</Text>
      {isDatePicker || isTimePicker ? (
        <>
          <Pressable
            onPress={() => setShowPicker(true)}
            className="bg-black-100 h-[41px] w-[210px] flex-row items-center rounded-lg border-[3px] border-[#006D77] px-4">
            <Text className="font-psemibold text-base text-[#006D77]">
              {selectedDateTime
                ? isDatePicker
                  ? selectedDateTime.toLocaleDateString()
                  : selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : placeholder || (isDatePicker ? 'Select date' : 'Select time')}
            </Text>
          </Pressable>
          {showPicker && displayPicker()}
        </>
      ) : (
        <TextInput
          className="bg-black-100 focus:border-secondary h-[41px] w-[210px] flex-row items-center rounded-lg border-[3px] border-[#006D77] px-4"
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#006D77"
        />
      )}
    </View>
  );
};

export default FormField;
