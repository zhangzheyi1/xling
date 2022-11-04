import { Button, Popconfirm, Modal, Tooltip } from 'antd';
import { XlButtonProps } from './xl-button';
import classNames from 'classnames';
import { omitObj } from '@/utils';

let keys = [
  'confirm',
  'onConfirm',
  'confirmMsg',
  'tableFooterExtraOnly',
  'action',
  'api',
  'onFinish',
  '__simple',
  'deleteApi',
  'detailApi',
  'detailParams',
  'extra',
  'record',
  'confirmVisible',
];

export default function XlButton(props: XlButtonProps) {
  let params: any = {
    ...props,
  };

  // 控制样式
  let className: string[] | string = [`xl-button`];

  // 是否在折叠按钮里面
  if (props.__simple) {
    className.push('simple');
  }

  // 是否有自定义样式
  if (props.className) {
    className.push(props.className);
  }

  className = classNames(className);

  // 删除一些没有用到的属性
  params = omitObj(params, keys);

  // 基础按钮
  let btn = (
    <Button className={className} {...params}>
      {props.children}
    </Button>
  );

  // 带悬浮提示
  if (props.tooltip) {
    btn = <Tooltip title={props.tooltip}>{btn}</Tooltip>;
  }

  // 带确认提示
  if (props.confirm && !props.disabled) {
    if (!props.__simple) {
      return (
        <Popconfirm
          title={props.confirmMsg}
          onConfirm={() => props.onConfirm && props.onConfirm()}
        >
          {btn}
        </Popconfirm>
      );
    } else {
      return (
        <Button
          className={className}
          {...params}
          onClick={() => {
            Modal.confirm({
              content: props.confirmMsg,
              onOk: () => props.onConfirm && props.onConfirm(),
            });
          }}
        >
          {props.children}
        </Button>
      );
    }
  }

  return btn;
}

XlButton.componentName = 'XlButton';
