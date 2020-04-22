/***
Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
***/

'use strict';

var config = module.exports = {
  kinesis : {
    region : 'ap-northeast-2'
  },

  sampleProducer : {
    stream : 'test-stream',
    shards : 1,
    waitBetweenDescribeCallsInSeconds : 5
  }
};