import React, { forwardRef, ReactNode } from 'react';
import { Select } from 'antd';
import { omitObj } from '@/utils';
import { XlSelectProps } from './xl-select';

export interface Option {
  /** 页面展示的值 */
  label: ReactNode | string | number;
  /** 实际所取到的值 */
  value: any;
  /** 是否禁用 */
  disabled?: boolean;
  /** 子元素 */
  children?: Array<Option>;
  /** 描述，card-group 时使用 */
  description?: ReactNode | string | number;
  /** 图片，card-group 时使用 */
  cover?: ReactNode | string | number;
  [key: string]: any;
}

const getOptions = (options: Array<Option> | undefined) => {
  if (!options) {
    return [];
  }
  return options.map((option) => {
    return (
      <Select.Option key={option.value} {...option}>
        {option.label}
      </Select.Option>
    );
  });
};

export default forwardRef(function XlSelect(props: XlSelectProps, ref: any) {
  const { options } = props;
  return (
    <Select ref={ref} {...omitObj(props, 'options')}>
      {getOptions(options)}
    </Select>
  );
});
