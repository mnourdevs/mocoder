import { notification } from "antd"
import { IconType } from "antd/es/notification/interface"

export const Toaster = (type:IconType, message:string) => {
  return notification.open({
    type:type,
    message: message,
    duration: 2,
    closeIcon: false,
    style: { width: "max-content", padding: 10 },
  })
}