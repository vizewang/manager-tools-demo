/**
 * Created by vizewang on 2015/10/17.
 */
"use strict"
module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);
    require("time-grunt")(grunt);
    var config={
        app:'app',
        dist:'dist'
    }
    grunt.initConfig({
        config:config,
        copy:{
            dist_html:{
                files:[
                    {
                        expand:true,
                        cwd:'<%=config.app%>/',
                        src:'**/*.js',
                        dest:'<%=config.dist%>/',
                        ext:'.js',
                        extDot:'last',
                        flatten:true,
                        rename:function(dest,src){
                            return dest+'js/'+src;
                        }
                    }
                ]
                    //{
                    //   '<%= config.dist %>/index.html': '<%= config.app %>/index.html',
                    //    '<%=config.dist%>/js/index.js': '<%=config.app%>/js/index.js'
                    //}
            }
        },
        clean:{
            dist:{
                src:['<%=config.dist%>/**/*'],
                filter:function(filepath){
                    return (!grunt.file.isDir(filepath))
                }
            }
        }
    })
}