/*
使用babel-plugin-import按需引入antd，具体配置在babel.config.js中。
另外因为是定制主题的方式，还需要在vue.config.js中配置less的相关参数，
其中javascriptEnabled的值必须为true，否则主题定制的样式无法生效
 */

import { App } from "vue";
import {
  message,
  notification,
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Comment,
  ConfigProvider,
  Empty,
  Result,
  Descriptions,
  PageHeader,
  Space,
  Image,
  Typography,
} from "ant-design-vue";

/* 需要注册的组件名字, 注册之前需要确保已经import这个组件 */
const components = [
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Comment,
  ConfigProvider,
  Empty,
  Result,
  Descriptions,
  PageHeader,
  Space,
  Image,
  Typography,
];

export function registerAntd(app: App): void {
  components.forEach((component) => {
    app.component(component.name || component.displayName, component);
  });
  app.config.globalProperties.$message = message;
  app.config.globalProperties.$notification = notification;
}
