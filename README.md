# OfficialWebsite
公司官网
![image](https://github.com/zhaosiyuan06/OfficialWebsite/blob/master/WebContent/img/LOGO.png)

## 主要技术点
###### 1.响应式布局（采用CSS媒体查询（Media Query）纯手写代码，不借用任何响应式框架，有效适配手机、平板、PC设备）
###### 2.product页面unity作品展示的兼容性问题
* product页面主要用来加载展示unity3D产品，由于浏览器对该产品的兼容性差异，需要加载两种格式的作品（webGL和webPlay），编写兼容性代码实现根据浏览器的不同来动态选择加载哪种格式。
* 兼容性处理（通过ID的奇偶来区分加载，即奇数加载webGL格式，偶数加载webPlay格式，然后根据浏览器去判断加载奇数ID对应的数据还是偶数ID对应的数据）
###### 3.ajax交互（使用ajax获取product页面的U3d作品）

