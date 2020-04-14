<template>
  <div class="about">
    <h1>{{id ? '编辑':'新增'}}干员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="basic">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="代号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="mixinUploadUrl"
              :show-file-list="false"
              :on-success="res=>$set(model,'avatar',res.url)"
              :headers="mixinGetAuthHeaders()"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="原画">
            <el-upload
              class="avatar-uploader"
              :action="mixinUploadUrl"
              :show-file-list="false"
              :on-success="res=>$set(model,'banner',res.url)"
              :headers="mixinGetAuthHeaders()"
            >
              <img v-if="model.banner" :src="model.banner" class="banner" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="职位">
            <el-select v-model="model.categories">
              <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标签">
            <el-select v-model="model.Tags" multiple>
              <el-option 
              v-for="item in tags" 
              :key="item._id" 
              :label="item.name" 
              :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="星级">
            <el-rate style="margin-top:0.6rem" :max="6" show-score v-model="model.star"></el-rate>
          </el-form-item>

          <el-form-item label="特性">
            <el-input type="textarea" v-model="model.characteristic"></el-input>
          </el-form-item>
          <el-form-item label="天赋">
            <el-input type="textarea" v-model="model.talent"></el-input>
          </el-form-item>
          <el-form-item label="整图">
            <el-upload
              class="avatar-uploader"
              :action="mixinUploadUrl"
              :show-file-list="false"
              :on-success="res=>$set(model,'fullGraph',res.url)"
              :headers="mixinGetAuthHeaders()"
            >
              <img v-if="model.fullGraph" :src="model.fullGraph" class="banner" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button size="small" @click="model.skills.push({})">
            <i class="el-icon-plus">添加技能</i>
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="mixinUploadUrl"
                  :show-file-list="false"
                  :on-success="res => $set(item,'icon',res.url)"
                  :headers="mixinGetAuthHeaders()"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem;">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
/*
    name:{type:String},//姓名
    title:{type:String},//代号
    avatar:{type:String},//头像
    banner:{type:String},//原画
    categories:{type:mongoose.SchemaTypes.ObjectId, ref:'Category'},//职位
    tag:[{type:mongoose.SchemaTypes.ObjectId, ref:'Category'}],//标签
    star:{type:Number},//星级
    skills:[{
        icon:{type:String},//技能图标
        description:{type:String},//技能描述
    }],
    characteristic:{type:String},//特性
    talent:{type:String},//天赋
    action:[{type:String}],//动作
    fullGraph:{type:String},//整图
*/
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: "",
        avatar: "",
        scores: {}
      },
      categories: {},
      heroes: [],
      tags: [],
      skills: [],
      partners: []
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = this.$http.put(`rest/operators/${this.id}`, this.model);
      } else {
        res = this.$http.post("rest/operators", this.model);
      }
      console.log(res);
      this.$router.push("/operators/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/operators/${this.id}`);
      this.model = Object.assign({}, this.model, res.data); //防止数据undefined
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    // async fetchOperators() {
    //   const res = await this.$http.get(`rest/operators`);
    //   this.operators = res.data;
    // },
    //     async fetchTags() {
    //   const res = await this.$http.get(`rest/tags`);
    //   this.Tags = res.data;
    // }
    // async fetchParents() {
    //   const res = await this.$http.get(`rest/items`);
    //   this.parents = res.data;
    // }
  },
  created() {
    // this.fetchParents();
    this.id && this.fetch();
    this.fetchCategories();
    //this.fetchTags();
    //this.fetchOperators();
  }
};
</script>
