import Vue from "vue";
import {
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
  Comment,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Dropdown,
  Empty,
  Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  message,
  Menu,
  Mentions,
  Modal,
  notification,
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
  Result,
  Descriptions,
  PageHeader,
  Space,
} from "ant-design-vue";

// 全局方法
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;

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
  Comment,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Dropdown,
  Empty,
  Form,
  FormModel,
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
  Result,
  Descriptions,
  PageHeader,
  Space,
];

function register(components) {
  components.forEach((component) => {
    Vue.use(component);
    // Vue.component(component.name, component);
  });
}

register(components);
