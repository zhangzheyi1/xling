import { Option } from '.';
import { SelectProps } from 'antd/lib/select';

interface XlSelectProps extends SelectProps<any> {
  options?: Array<Option>;
}
