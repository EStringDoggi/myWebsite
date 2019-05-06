<template>


  <div class="resume">
      <section class="information">
        <information></information>
      </section>   
    <section class="typepage">
      <article>
        <div class="education">
          <h3>教育背景</h3>
          <p>
            深圳职业技术学院18届毕业生，主修计算机信息管理，兼修计算机多媒体。
            本科（深圳大学自考）专业为金融管理。
            <br>

            
          </p>
          <p class="school">
            <b>深圳职业技术学院</b>
            <b class="sub">（全日制专科）</b>
            <i>2015.9-2018.7</i>
          </p>
          <p class="school">
            <b>深圳大学</b>
            <b class="sub">（非全日制本科）</b>
            <i>2016.9-2018.12</i>
            

          </p>

            
        </div>
        <div class="skill">
          <h3>我的技能</h3>
          <span>半年内敲的：</span>
          <p>
            html5、css、js、css精灵图、ajax、webpack、
            ES6、小程序云开发、git
          </p>
          <span>以前敲的：</span>
          <p>asp.net、SQL</p>
          <span>会使用的框架、工具与插件：</span>
          <p>
            vue、vuex、vue-cli、vue-router、axios、
            Bootstrap、jQuery、animate、artTemplate、masonry、lazyload、
            babel、fullPage、velocity
          </p>
          <span>多媒体：</span>
          <p>PS（修修照片）、PR（视频剪辑）、AE（加点简单特效）</p>
        </div>
        <div class="job clearfix">
          <h3>工作经历</h3>
          <div class="job-l"></div>
          <div class="job-r">
            <ul>
              <li>
                <span>深圳市思普达软件系统股份有限公司</span>
                <br>
                <b>ERP实施顾问</b>
                <i>2018.04-2018.07</i>
                <p>
                  熟悉ERP系统操作，现场指导客户操作系统、答疑，解决系统错误。
                  <br>根据需求配置功能，使用sql建表、查询所需信息、写存储过程、触发器。
                </p>
              </li>
              <li>
                <span>深圳市华傲数据技术有限公司</span>
                <br>
                <b>数据录入</b>
                <i>2018.01-2018.04</i>
                <p>文件资料录入，兼职</p>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="myworks">
          <h3>我的作品</h3>
          <ul>
            <li>
              <span>我的个人主页</span><i>2018.10~至今</i>
              <p>
                  <b>
                    开发技术：
                  </b>
                  <ul>
                      <li>
                        （1）主页：vue、vue-Cli、vue-router、axios、Element-ul、animate.css
                      </li>
                      <li>（2）电商布局：jQuery,ajax,artTemplate,lazyload</li>
                      <li>（3）公司展示型页面：jQuery,artTemplate,velocity,fullPage,Bootstrap,ajax</li>
                  </ul>
              </p>
            </li>
            <li>
              <span>微信小程序</span><i>2018.10</i>
              <p>
                  个人开发的第一个微信小程序
              </p>
              <p>
                  <b>实现了什么功能：</b>
                  <ul>
                    <li>
                      1)汇率换算
                    </li>
                    <li>
                      2)天数计算:选择起始结束日期返回天数
                    </li>
                    <li>
                      3)表情包制作：选择一张表情图填充文字并导出图片。
                      支持文本拖拽，文本格式选择，多段文字插入。
                      canvas针对图片比例自适应，原图画质导出。
                      可以从相册获取图片，也可以上传图片至云端供其他用户使用
                    </li>
                    <li>
                      4)涂鸦板：选择背景色、笔色号及大小，绘制涂鸦，支持返回上一步，支持导出图片
                    </li>
                    <li>
                      5)管理个人上传表情图：删除云端个人上传的表情图片
                    </li>
                  </ul>
              </p>
              <p>
                  <b>开发技术：</b>
                  canvas，小程序云开发
              </p>
            </li>
            <li>
              <span>毕业设计</span>
              <i>2018.03~2018.05</i>
              <p>
                基于asp.net搭建的房租管理系统,该系统分为房东、租客两个角色以使用不同功能。
                <br>
              </p>
              <p>
                <b>实现了什么功能：</b>
                发布房源、查询名下房源租用状态、租客缴费状态,选择租用房源，选择日期，
                房源缴费，查询是否缴费，关键字检索房源，个人信息完善、注册与登录
              </p>
              <p>
                <b>开发技术：</b>
                sql数据库 ， html+css，JavaScript、jQuery
              </p>
              <p>
                <b>开发环境：</b>
                visual studio 2010。
              </p>
            </li>
            
            
          </ul>
        </div>
        <div class="myhobby">
          <h3>个人喜好</h3>
          <p>
            音乐
            <i>
            （视觉系摇滚、金属、融合、爵士、古典）
            </i>
            、贝斯
            <i>

            （划水根音乐手）
            </i>
            、摄影
            <i>

            （拍十张可能有一张能看）
            </i>
            、轮滑
            <i>

            （拿过第一名！）
            </i>
            、跆拳道
            <i>
            （已经老骨头了）

            </i>
            、羽毛球、咖啡
            <i>

            （品鉴能力为零，囤货续命）
            </i>
          </p>
          <h3>近半年目标</h3>
          <p>学代码、准备好作品投简历，日语N3备考</p>
        </div>
      </article>
      <aside class="clearfix">
        <information></information>
      </aside>
    </section>
  </div>

</template>
<script>
import information from './information'
export default {
  components:{
    information
  }
};
</script>
<style lang="less" scoped>
.resume {
@media screen and (max-width:767px) {
  aside{
    display: none;
  }
  .information{
    display: block;
  }
}
@media screen and (min-width:768px){
  .information{
    display: none;
  }
  aside{
    display: block;
  }
}


  section {
    display: flex;
    margin-top: 10px;
  }
  article {
    flex: 2;
    background-color: rgb(255, 255, 255);
    float: left;
    margin-right: 10px;
    border-radius: 5px;
    text-align: left;
    overflow: hidden;
    text-indent: 2em;
    p {
      padding: 0 1em;
      line-height: 1.7em;
    }
    span {
      margin: 1em 0 0 1em;
      text-indent: 0em;
      display: inline-block;
      text-align: left;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #666699;
      color: #fff;
      font-weight: bolder;
    }
    h3 {
      margin: 0;
      padding: 10px 0;
      background-color: rgb(36, 36, 36);
      color: #fff;
      font-weight: bold;
    }
    // 教育背景
    .education {
      padding-bottom: 1em;
      b{
        font-size: 0.8em;
      }
      .school{
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    // 技能
    .skill {
    }
    // 作品
    .myworks {
      ul {
        padding-left: 0;
        margin-top: 0;
        span {
          background-color: #468b41;
          margin-left: 0;
        }
      }
      li {
        position: relative;
      }
      i {
        position: absolute;
        right: 5em;
        top: 1.3em;
      }
    }
    // 工作
    .job {
      position: relative;
      padding-bottom: 5em;
      .job-l {
        float: left;
        position: absolute;
        margin-top:1em;
        left: 3em;
        width: 2px;
        background-color: rgb(167, 12, 12);
        height: 80%;
      }
      .job-r {
        float: left;
        height: -webkit-fit-content;
        ul {
          position: relative;
          top: 3em;
        }
        span {
          background-color: #0099ff;
          // position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            left: 2.6em;
            width: 1em;
            height: 1em;
            background-color: rgb(167, 12, 12);
            border: 3px solid rgb(230, 166, 166);
            border-radius: 50%;
          }
        }
        b {
          position: relative;
          left: 5em;
          // top: 1em;
          line-height: 2.5em;
        }
        i {
          position: absolute;
          right: 2em;
          line-height: 2.5em;
          // top: 1em;
        }
        p {
          padding-left: 2em;
        }
      }
    }
    // 兴趣
    .myhobby {
      i{
        color: #aaa;
        font-style:normal;
        font-size: 0.8em;      
      }
    }
  }
  aside {
    flex: 1;
    background-color: rgb(255, 255, 255);
    float: left;
    border-radius: 5px;
    height: -webkit-fit-content;
  }
}
</style>
