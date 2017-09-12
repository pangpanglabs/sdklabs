//
//  NativeTest.m
//  LabsBridge
//
//  Created by 李澈 on 16/12/12.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "LabsBridge.h"
#import <Pos/Pos.h>
@implementation LabsBridge
//导出模块
RCT_EXPORT_MODULE();    //此处不添加参数即默认为这个OC类的名字

RCT_EXPORT_METHOD(callAPI:(NSString *)path
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    NSString* result = P2PosCall(path);
    NSLog(@"%@ :%@",path,result);
    resolve(result);
  } @catch (NSException *exception) {
    reject(@"500",[exception name],[NSError errorWithDomain:path code:500 userInfo:exception.userInfo]);
  } 
  
}

@end
