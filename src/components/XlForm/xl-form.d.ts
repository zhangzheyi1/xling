// import { ReactNode, CSSProperties } from 'react';
// import { AySearchTableField } from '../AySearchTable/ay-search-table';

// export interface ColSize {
//   xs?: number;
//   sm?: number;
//   md?: number;
//   lg?: number;
//   xl?: number;
//   xxl?: number;
// }

// export interface AyFormProps {
//   /** 配置项 */
//   fields?: Array<AyFormField | AySearchTableField>;
//   /** form 名称 */
//   name?: string;
//   /** 子元素 */
//   children?: ReactNode;
//   /** 控制元素 */
//   ref?: any;
//   /** 默认 span 值 */
//   span?: number;
//   /** form 的其它属性 */
//   props?: any;
//   /** Form.Item 的其它属性 */
//   formItemProps?: any;
//   /** 是否只读 */
//   readonly?: boolean;
//   /** 是否用 Description 样式展示 */
//   desc?: boolean;
//   /** 只读模式是否无背景 */
//   noBackground?: boolean;
//   /** 样式 */
//   className?: string;
//   /** 样式 */
//   style?: CSSProperties;
//   /** label 对齐方式 */
//   labelAlign?: 'left' | 'right';
//   /** 表单的间距 */
//   gutter?: number;
//   /** 布局 */
//   layout?: {
//     labelCol?: any;
//     wrapperCol?: any;
//   };
//   /** 表单布局方式 */
//   formLayout?: 'horizontal' | 'vertical' | 'inline' | string;
//   /** 提交事件 */
//   onConfirm?(form: any): any;
//   /** 提交事件 跟 onConfirm 效果一致 */
//   onSubmit?(form: any): any;
//   /** 提交事件 跟 onConfirm 效果一致 */
//   onFinish?(form: any): any;
//   [key: string]: any;
// }

// export interface RegisterFieldProps {
//   /** 类型 */
//   type: string;
//   /** 默认值 */
//   defaultValue: any;
//   /** formItem 的 valuePropName，比如 Checkbox 时，valuePropName = 'checked' */
//   valuePropName?: string;
//   /** render */
//   render: (
//     field: AyFormField,
//     setFieldsValue: (values: any) => void,
//     readonly: boolean,
//     addFieldListener: (key: string, fieldListener: FieldListener) => void,
//   ) => ReactNode;
// }

// /**
//  * 所有 field 的 最小单元，会被这些类型扩展: AyForm AySearch AyTable AySearchTable AyDialogForm
//  */
// export interface Field {
//   /** 标题 */
//   title?: ReactNode | string;
//   /** 相应的 key */
//   key?: string;
//   /**
//    * 可以选择下面 type 对应的类型
//    * @param input 输入框
//    * @param number 数字输入框
//    * @param percent 百分比输入框
//    * @param password 密码框
//    * @param textarea 多行输入框
//    * @param select 选择框
//    * @param switch 开关
//    * @param checkbox 多选框（单个）
//    * @param checkbox-group 多选组
//    * @param radio-group 单选组
//    * @param date 日期
//    * @param dadate-rangete 日期区间
//    * @param empty 空白框
//    * @param custom 自定义，此时支持 renderContent
//    * @param card-group 卡片选择，支持单个与多个
//    * @param tag-group 标签选择，支持单个与多个
//    * @param html 原生 HTML 标签
//    * @param list 列表
//    */
//   type?:
//     | 'input'
//     | 'search'
//     | 'password'
//     | 'number'
//     | 'percent'
//     | 'textarea'
//     | 'editor'
//     | 'select'
//     | 'switch'
//     | 'checkbox'
//     | 'checkbox-group'
//     | 'radio-group'
//     | 'date'
//     | 'date-range'
//     | 'empty'
//     | 'custom'
//     | 'card-group'
//     | 'tag-group'
//     | 'html'
//     | 'list'
//     | string;
//   /**
//    * 配置项，是一个数组，数组每个对象可以配置[{ label; value; disable? }]
//    * @param {Array} 选项
//    * @param label 页面展示的值
//    * @param value 实际所取到的值
//    * @param disable 是否禁用
//    */
//   options?: Array<Option>;
//   [key: string]: any;
// }

// export interface Option {
//   /** 页面展示的值 */
//   label?: ReactNode | string | number;
//   /** 实际所取到的值 */
//   value: any;
//   /** 是否禁用 */
//   disabled?: boolean;
//   /** 子元素 */
//   children?: Array<Option>;
//   /** 描述，card-group 时使用 */
//   description?: ReactNode | string | number;
//   /** 图片，card-group 时使用 */
//   cover?: ReactNode | string | number;
//   [key: string]: any;
// }

// export interface AyFormField extends Field {
//   /** 相应的 key，会跟最后表单取到的项目相关; form 的 key 值必填 */
//   key: string;
//   /** Grid Col 占位 [0 - 24] */
//   span?: number | string;
//   /** Grid Col 偏移 */
//   offset?: number | string;
//   /** 默认值 */
//   defaultValue?: any;
//   /** 是否默认必填 */
//   required?: boolean | string;
//   /** 是否默认只读 */
//   readonly?: boolean | string;
//   /** 权限配置 */
//   rules?: Array<any>;
//   /** 是否展示，保留占位; 保留默认值 */
//   visible?: boolean | Function | string;
//   /** 是否展示，不会占位; 保留默认值 */
//   hidden?: boolean | Function | string;
//   /** 是否可编辑 */
//   editable?: boolean | string;
//   /** 原生的属性 */
//   props?: {
//     /** 输入框、选择框未输入文字时的提示 */
//     placeholder?: string;
//     [key: string]: any;
//   };
//   /** formItem 的属性 */
//   formItemProps?: any;
//   /** 自定义 content 内容 */
//   renderContent?(field: AyFormField, values: any): ReactNode;
//   /** 自定义 render */
//   render?(field: AyFormField, values: any): ReactNode;
//   /** 数据变化监听 */
//   onChange?(
//     value: ReactNode,
//     values: any,
//     setFieldsValue: (values: any) => void,
//   ): void;
//   /** 提示文字 */
//   help?: string | ReactNode;
//   /** 时间格式化的开始时间 */
//   startKey?: string;
//   /** 时间格式化的结束时间 */
//   endKey?: string;
//   /** 重新渲染 */
//   reSetting?(values: any, mode: string): AyFormField;
//   /** 初始化参数 */
//   _values?: any;
//   /** 默认排序 */
//   order?: number | string;
//   /** 日期格式化规则 */
//   formatRule?: string;
//   /** readonly 下的日期格式化规则 */
//   readonlyFormatRule?: string;
//   /** 提示文本 */
//   tooltip?: string;
//   [key: string]: any;
// }

// /**
//  * 监听 Field 变化
//  * @param value 变化的值
//  * @param field 变化了的 field
//  */
// export type FieldListener = (
//   value: any,
//   field: AyFormField | AySearchTableField,
// ) => void;
