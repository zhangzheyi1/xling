import { ButtonProps } from 'antd/lib/button';

export interface XlButtonProps extends ButtonProps {
  /** true 会有确认，false: 无确认 */
  confirm?: boolean;
  /** 确认事件 */
  onConfirm?(): void;
  /** 是否只在表格扩展显示 */
  tableFooterExtraOnly?: boolean;
  /** 自定义确认消息 */
  confirmMsg?: React.ReactNode;
  /** 悬浮提示 */
  tooltip?: React.ReactNode;
  __simple?: boolean;
  [key: string]: any;
}
