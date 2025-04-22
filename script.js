// 套管数据结构
const casingData = {
    "20 ": {
        od: 508,
        variants: [
            { id: 485.3, weight: 139.68 }          
        ]
    },  
    "13 3/8": {
        od: 339.7,
        variants: [
            { id: 322.9, weight: 70.90 },
            { id: 320.4, weight: 80.78 },
            { id: 317.9, weight: 90.59 },
            { id: 315.3, weight: 100.3 },
            { id: 313.6, weight: 106.87 }          
        ]
    },
    "9 5/8": {
        od: 244.5,
        variants: [
            { id: 228.7, weight: 47.99 },       
            { id: 226.6, weight: 53.59 },
            { id: 224.4, weight: 59.54 },          
            { id: 222.4, weight: 65.54 },
            { id: 220.5, weight: 70.64 },
            { id: 216.8, weight: 80.39 }
        ]
    },
    "7 ": {
        od: 177.8,
        variants: [
            { id: 166.1, weight: 25.6 },       
            { id: 164, weight: 29.78 },
            { id: 161.7, weight: 34.27 },          
            { id: 159.4, weight: 38.72 },
            { id: 157.1, weight: 43.34 },          
            { id: 154.8, weight: 47.64 },
            { id: 152.5, weight: 51.88 },
            { id: 150.4, weight: 55.78 }
        ]
    },
    "5 1/2": {
        od: 139.7,
        variants: [
            { id: 127.3, weight: 20.79 },
            { id: 125.7, weight: 23.20 },          
            { id: 124.3, weight: 25.43 },
            { id: 121.4, weight: 29.81 },
            { id: 118.6, weight: 33.78 }
        ]
    },
    "5 ": {
        od: 127,
        variants: [
            { id: 115.8, weight: 17.11 },
            { id: 114.1, weight: 19.45 },          
            { id: 112.0, weight: 22.44 },
            { id: 108.6, weight: 27.00 }
        ]
    },  
    "4 1/2": {
        od: 114.3,
        variants: [
            { id: 99.56, weight: 20.83 }
        ]
    }
};

// 平式油管数据
const regularTubingData = {
    "1.050 ": {
        od: 26.7,
        variants: [
            { id: 21, weight: 1.70 }
        ]
    },  
    "1.315 ": {
        od: 33.4,
        variants: [
            { id: 26.6, weight: 2.53 }
        ]
    },    
    "1.660 ": {
        od: 42.2,
        variants: [
            { id: 35.1, weight: 3.44 }
        ]
    },  
    "1.990 ": {
        od: 48.3,
        variants: [
            { id: 40.9, weight: 4.09 }
        ]
    },  
    "2 3/8": {
        od: 60.3,
        variants: [
            { id: 51.8, weight: 5.78 },
            { id: 50.6, weight: 6.71 },
            { id: 47.4, weight: 8.66 }
        ]
    },
    "2 7/8": {
        od: 73.0,
        variants: [
            { id: 62.0, weight: 9.41 },
            { id: 57.4, weight: 12.75 }
        ]
    },
    "3 1/2": {
        od: 88.9,
        variants: [
            { id: 77.9, weight: 11.68 },
            { id: 76.0, weight: 13.48 },
            { id: 74.2, weight: 15.11 },          
            { id: 69.9, weight: 18.93 }
        ]
    },
    "4": {
        od: 101.6,
        variants: [
            { id: 90.1, weight: 14.02 }
        ]
    },
    "4 1/2": {
        od: 114.3,
        variants: [
            { id: 100.5, weight: 18.66 }
        ]
    }
};

// 外加厚油管数据
const thickenedTubingData = {
    "1.050 ": {
        od: 26.7,
        variants: [
            { id: 21, weight: 1.79 }
        ]
    },  
    "1.315 ": {
        od: 33.4,
        variants: [
            { id: 26.6, weight: 2.60 }
        ]
    },    
    "1.660 ": {
        od: 42.2,
        variants: [
            { id: 35.1, weight: 3.50 }
        ]
    },  
    "1.990 ": {
        od: 48.3,
        variants: [
            { id: 40.9, weight: 4.20 }
        ]
    },    
    "2 3/8": {
        od: 60.3,
        variants: [
            { id: 50.6, weight: 6.89 },
            { id: 47.4, weight: 8.83 }
        ]
    },
    "2 7/8": {
        od: 73.0,
        variants: [
            { id: 62, weight: 9.58 },
            { id: 57.4, weight: 12.93 }
        ]
    },
    "3 1/2": {
        od: 88.9,
        variants: [
            { id: 76.0, weight: 13.80 },
            { id: 69.9, weight: 19.24 }
        ]
    },
    "4": {
        od: 101.6,
        variants: [
            { id: 88.3, weight: 16.66 }
        ]
    },
    "4 1/2": {
        od: 114.3,
        variants: [
            { id: 100.5, weight: 19.20 }
        ]
    }
};

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化套管选择
    initCasingOptions();
    
    // 初始化油管选择
    updateTubingOptions();
    
    // 事件监听
    document.getElementById('addCasing').addEventListener('click', addCasingSection);
    document.getElementById('tubingType').addEventListener('change', updateTubingOptions);
    document.getElementById('tubingSize').addEventListener('change', updateTubingInnerOptions);
    document.getElementById('tubingInnerSpec').addEventListener('change', updateTubingDetails);
    document.getElementById('calculate').addEventListener('click', calculateAll);
    
    // 添加油管深度变化监听
    document.getElementById('tubingDepth').addEventListener('change', drawWellDiagram);
    document.getElementById('tubingDepth').addEventListener('input', drawWellDiagram);
    
    // 设置用户修改追踪
    setupUserModificationTracking();
    
    // 绘制初始井身图
    drawWellDiagram();
});

// 设置用户修改追踪
function setupUserModificationTracking() {
    // 监听套管输入框修改
    document.querySelectorAll('.casing-od, .casing-id').forEach(input => {
        input.addEventListener('input', function() {
            this.dataset.userModified = 'true';
            drawWellDiagram();
        });
    });
    
    // 监听油管输入框修改
    ['tubingOD', 'tubingID', 'tubingWeight'].forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', function() {
            this.dataset.userModified = 'true';
            drawWellDiagram();
        });
    });
}

// 初始化套管选项
function initCasingOptions() {
    const casingItems = document.querySelectorAll('.casing-item');
    
    casingItems.forEach(item => {
        const sizeSelect = item.querySelector('.casing-size');
        populateCasingOptions(sizeSelect);
        
        // 绑定套管尺寸变化事件
        sizeSelect.addEventListener('change', function() {
            const parent = this.closest('.casing-item');
            updateCasingInnerOptions(parent, this.value);
        });
        
        // 为已有的套管项添加深度变化监听
        item.querySelector('.casing-top-depth').addEventListener('change', drawWellDiagram);
        item.querySelector('.casing-bottom-depth').addEventListener('change', drawWellDiagram);
        
        // 为外径内径添加修改跟踪
        item.querySelectorAll('.casing-od, .casing-id').forEach(input => {
            input.addEventListener('input', function() {
                this.dataset.userModified = 'true';
                drawWellDiagram();
            });
        });
    });
}

// 填充套管选项
function populateCasingOptions(select) {
    select.innerHTML = '<option value="">请选择尺寸</option>';
    
    for (const size in casingData) {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = `${size}" (${casingData[size].od}mm)`;
        select.appendChild(option);
    }
}

// 更新套管内径选项 - 完全重写，参照油管实现
function updateCasingInnerOptions(parent, size) {
    // 找到或创建内径规格选择下拉框
    let innerSpecContainer = parent.querySelector('.inner-spec-container');
    
    if (!innerSpecContainer) {
        // 创建容器
        innerSpecContainer = document.createElement('div');
        innerSpecContainer.className = 'form-group inner-spec-container';
        
        // 创建标签
        const label = document.createElement('label');
        label.textContent = '内径规格:';
        innerSpecContainer.appendChild(label);
        
        // 创建选择框
        const select = document.createElement('select');
        select.className = 'casing-inner-spec';
        innerSpecContainer.appendChild(select);
        
        // 插入到外径输入框之前
        const odGroup = parent.querySelector('.casing-od').closest('.form-group');
        parent.insertBefore(innerSpecContainer, odGroup);
    }
    
    // 获取内径选择框
    const innerSpecSelect = innerSpecContainer.querySelector('.casing-inner-spec');
    
    // 清空并重新绑定事件（防止事件重复绑定）
    innerSpecSelect.innerHTML = '<option value="">请选择内径规格</option>';
    const newInnerSpecSelect = innerSpecSelect.cloneNode(true);
    innerSpecContainer.replaceChild(newInnerSpecSelect, innerSpecSelect);
    
    // 更新外径
    const odInput = parent.querySelector('.casing-od');
    if (size && casingData[size]) {
        odInput.value = casingData[size].od;
        odInput.dataset.userModified = 'false';
    } else {
        odInput.value = '';
    }
    
    // 清空内径
    const idInput = parent.querySelector('.casing-id');
    idInput.value = '';
    idInput.dataset.userModified = 'false';
    
    // 填充内径选项
    if (size && casingData[size]) {
        const variants = casingData[size].variants;
        variants.forEach((variant, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${variant.id}mm (${variant.weight}kg/m)`;
            newInnerSpecSelect.appendChild(option);
        });
        
        // 重新绑定内径规格选择事件
        newInnerSpecSelect.addEventListener('change', function() {
            updateCasingDetails(parent, size, this.value);
        });
    }
    
    drawWellDiagram();
}

// 更新套管详情 - 简化并确保总是更新值
function updateCasingDetails(parent, size, variantIndex) {
    const odInput = parent.querySelector('.casing-od');
    const idInput = parent.querySelector('.casing-id');
    
    if (size === '' || variantIndex === '' || !casingData[size] || !casingData[size].variants[variantIndex]) {
        return;
    }
    
    // 总是更新内径值，不考虑用户是否修改过
    const variant = casingData[size].variants[variantIndex];
    odInput.value = casingData[size].od;
    idInput.value = variant.id;
    
    // 重置修改标记
    odInput.dataset.userModified = 'false';
    idInput.dataset.userModified = 'false';
    
    drawWellDiagram();
}

// 添加套管段 - 确保所有事件正确绑定
function addCasingSection() {
    const casingList = document.getElementById('casingList');
    const newItem = document.createElement('div');
    newItem.className = 'casing-item';
    
    newItem.innerHTML = `
        <div class="form-group">
            <label>顶部深度 (m):</label>
            <input type="number" class="casing-top-depth" min="0" step="0.01">
        </div>
        <div class="form-group">
            <label>下入深度 (m):</label>
            <input type="number" class="casing-bottom-depth" min="0" step="0.01">
        </div>
        <div class="form-group">
            <label>套管尺寸:</label>
            <select class="casing-size">
                <option value="">请选择尺寸</option>
            </select>
        </div>
        <div class="form-group">
            <label>外径 (mm):</label>
            <input type="number" class="casing-od" step="0.1">
        </div>
        <div class="form-group">
            <label>内径 (mm):</label>
            <input type="number" class="casing-id" step="0.1">
        </div>
        <button class="remove-casing">移除</button>
    `;
    
    casingList.appendChild(newItem);
    
    // 填充套管尺寸选项
    const sizeSelect = newItem.querySelector('.casing-size');
    populateCasingOptions(sizeSelect);
    
    // 绑定尺寸选择事件
    sizeSelect.addEventListener('change', function() {
        updateCasingInnerOptions(newItem, this.value);
    });
    
    // 绑定删除按钮事件
    newItem.querySelector('.remove-casing').addEventListener('click', function() {
        casingList.removeChild(newItem);
        drawWellDiagram();
    });
    
    // 绑定深度变化事件
    newItem.querySelector('.casing-top-depth').addEventListener('change', drawWellDiagram);
    newItem.querySelector('.casing-bottom-depth').addEventListener('change', drawWellDiagram);
    
    // 绑定外径内径修改跟踪
    newItem.querySelectorAll('.casing-od, .casing-id').forEach(input => {
        input.addEventListener('input', function() {
            this.dataset.userModified = 'true';
            drawWellDiagram();
        });
    });
}


// 更新油管选项
function updateTubingOptions() {
    const tubingType = document.getElementById('tubingType').value;
    const tubingSizeSelect = document.getElementById('tubingSize');
    const tubingData = tubingType === 'regular' ? regularTubingData : thickenedTubingData;
    
    tubingSizeSelect.innerHTML = '<option value="">请选择尺寸</option>';
    
    for (const size in tubingData) {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = `${size}" (${tubingData[size].od}mm)`;
        tubingSizeSelect.appendChild(option);
    }
    
    // 清空内径选项
    document.getElementById('tubingInnerSpec').innerHTML = '<option value="">请选择内径规格</option>';
    
    // 清空所有值并重置修改标记
    const tubingODInput = document.getElementById('tubingOD');
    const tubingIDInput = document.getElementById('tubingID');
    const tubingWeightInput = document.getElementById('tubingWeight');
    
    tubingODInput.value = '';
    tubingIDInput.value = '';
    tubingWeightInput.value = '';
    
    tubingODInput.dataset.userModified = 'false';
    tubingIDInput.dataset.userModified = 'false';
    tubingWeightInput.dataset.userModified = 'false';
    
    drawWellDiagram();
}

// 更新油管内径选项
function updateTubingInnerOptions() {
    const tubingType = document.getElementById('tubingType').value;
    const tubingSize = document.getElementById('tubingSize').value;
    const tubingInnerSelect = document.getElementById('tubingInnerSpec');
    const tubingData = tubingType === 'regular' ? regularTubingData : thickenedTubingData;
    const tubingODInput = document.getElementById('tubingOD');
    
    tubingInnerSelect.innerHTML = '<option value="">请选择内径规格</option>';
    
    if (tubingSize && tubingData[tubingSize]) {
        const variants = tubingData[tubingSize].variants;
        variants.forEach((variant, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${variant.id}mm (${variant.weight}t/1000m)`;
            tubingInnerSelect.appendChild(option);
        });
        
        // 总是更新外径值
        tubingODInput.value = tubingData[tubingSize].od;
        tubingODInput.dataset.userModified = 'false';
    } else {
        tubingODInput.value = '';
    }
    
    // 清空内径和重量
    document.getElementById('tubingID').value = '';
    document.getElementById('tubingWeight').value = '';
    document.getElementById('tubingID').dataset.userModified = 'false';
    document.getElementById('tubingWeight').dataset.userModified = 'false';
    
    drawWellDiagram();
}

// 更新油管详情
function updateTubingDetails() {
    const tubingType = document.getElementById('tubingType').value;
    const tubingSize = document.getElementById('tubingSize').value;
    const variantIndex = document.getElementById('tubingInnerSpec').value;
    const tubingData = tubingType === 'regular' ? regularTubingData : thickenedTubingData;
    const tubingIDInput = document.getElementById('tubingID');
    const tubingWeightInput = document.getElementById('tubingWeight');
    
    if (tubingSize && variantIndex !== '' && tubingData[tubingSize]) {
        const variant = tubingData[tubingSize].variants[variantIndex];
        // 总是更新值
        tubingIDInput.value = variant.id;
        tubingWeightInput.value = variant.weight;
        
        // 重置修改标记
        tubingIDInput.dataset.userModified = 'false';
        tubingWeightInput.dataset.userModified = 'false';
    } else {
        tubingIDInput.value = '';
        tubingWeightInput.value = '';
    }
    
    drawWellDiagram();
}

// 计算所有结果
function calculateAll() {
    // 获取油管数据
    const tubingID = parseFloat(document.getElementById('tubingID').value);
    const tubingDepth = parseFloat(document.getElementById('tubingDepth').value);
    const tubingWeight = parseFloat(document.getElementById('tubingWeight').value);
    const tubingOD = parseFloat(document.getElementById('tubingOD').value);
    
    // 验证输入
    if (!tubingID || !tubingDepth || !tubingWeight || !tubingOD) {
        alert('请完整填写油管信息和深度');
        return;
    }
    
    // 计算油管内容积 (π * r² * h)
    const tubingVolume = Math.PI * Math.pow(tubingID / 2000, 2) * tubingDepth;
    
    // 计算油管重量
    const totalTubingWeight = (tubingWeight / 1000) * tubingDepth;
    
    // 获取所有套管数据并验证
    const casingItems = document.querySelectorAll('.casing-item');
    const casingData = [];
    
    casingItems.forEach(item => {
        const topDepth = parseFloat(item.querySelector('.casing-top-depth').value);
        const bottomDepth = parseFloat(item.querySelector('.casing-bottom-depth').value);
        const casingID = parseFloat(item.querySelector('.casing-id').value);
        const casingOD = parseFloat(item.querySelector('.casing-od').value);
        
        if (!isNaN(topDepth) && !isNaN(bottomDepth) && !isNaN(casingID) && !isNaN(casingOD) && 
            topDepth < bottomDepth && casingID > 0 && casingOD > 0) {
            casingData.push({
                top: topDepth,
                bottom: bottomDepth,
                id: casingID,
                od: casingOD
            });
        }
    });
    
    // 如果没有有效的套管数据，无法计算环空体积
    if (casingData.length === 0) {
        alert('请至少添加一段有效的套管数据');
        return;
    }
    
    // 按照深度从小到大分段计算
    let annularVolume = 0;
    
    // 1. 收集所有深度分界点（套管顶部和底部深度）
    let depthPoints = new Set();
    casingData.forEach(casing => {
        depthPoints.add(casing.top);
        depthPoints.add(casing.bottom);
    });
    depthPoints.add(0); // 地表
    depthPoints.add(tubingDepth); // 油管底深
    
    // 转换为数组并排序
    depthPoints = Array.from(depthPoints).sort((a, b) => a - b);
    
    // 2. 按深度分段计算环空体积
    for (let i = 0; i < depthPoints.length - 1; i++) {
        const startDepth = depthPoints[i];
        const endDepth = depthPoints[i + 1];
        const segmentHeight = endDepth - startDepth;
        
        if (segmentHeight <= 0) continue; // 跳过相同深度点
        
        // 找出该深度段内的所有套管
        const activeCasings = casingData.filter(casing => 
            casing.top <= startDepth && casing.bottom >= endDepth);
        
        if (activeCasings.length === 0) continue; // 该段深度没有套管
        
        // 找出最小内径的套管
        const minCasingID = Math.min(...activeCasings.map(casing => casing.id));
        
        // 计算该段环空体积
        if (endDepth <= tubingDepth) {
            // 油管所在区域 - 计算环空体积
            const segmentAnnularVolume = Math.PI * (Math.pow(minCasingID / 2000, 2) - Math.pow(tubingOD / 2000, 2)) * segmentHeight;
            annularVolume += segmentAnnularVolume;
        } else if (startDepth >= tubingDepth) {
            // 油管底部以下区域 - 计算套管内体积
            const segmentCasingVolume = Math.PI * Math.pow(minCasingID / 2000, 2) * segmentHeight;
            annularVolume += segmentCasingVolume;
        } else {
            // 跨越油管底部的区域 - 分段计算
            // 油管覆盖部分的环空体积
            const tubingPartHeight = tubingDepth - startDepth;
            const tubingPartVolume = Math.PI * (Math.pow(minCasingID / 2000, 2) - Math.pow(tubingOD / 2000, 2)) * tubingPartHeight;
            
            // 油管底部以下部分的套管内体积
            const belowTubingHeight = endDepth - tubingDepth;
            const belowTubingVolume = Math.PI * Math.pow(minCasingID / 2000, 2) * belowTubingHeight;
            
            annularVolume += tubingPartVolume + belowTubingVolume;
        }
    }
    
    // 显示结果
    document.getElementById('tubingVolume').textContent = tubingVolume.toFixed(3);
    document.getElementById('totalTubingWeight').textContent = totalTubingWeight.toFixed(3);
    document.getElementById('annularVolume').textContent = annularVolume.toFixed(3);
}

// 绘制井身结构图
function drawWellDiagram() {
    const canvas = document.getElementById('wellDiagram');
    canvas.innerHTML = ''; // 清空现有内容
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const centerX = width / 2;
    
    // 设置比例尺 (图形高度 / 井深)
    let maxDepth = 0;
    const casingItems = document.querySelectorAll('.casing-item');
    casingItems.forEach(item => {
        const bottomDepth = parseFloat(item.querySelector('.casing-bottom-depth').value) || 0;
        if (bottomDepth > maxDepth) {
            maxDepth = bottomDepth;
        }
    });
    
    const tubingDepth = parseFloat(document.getElementById('tubingDepth').value) || 0;
    if (tubingDepth > maxDepth) {
        maxDepth = tubingDepth;
    }
    
    if (maxDepth === 0) {
        // 没有有效深度数据，绘制默认图形
        canvas.innerHTML = '<div style="text-align:center;padding-top:300px;color:#999">请输入套管和油管数据</div>';
        return;
    }
    
    const scale = (height - 40) / maxDepth;
    
    // 绘制深度标尺
    const rulerEl = document.createElement('div');
    rulerEl.style.position = 'absolute';
    rulerEl.style.left = '10px';
    rulerEl.style.top = '0';
    rulerEl.style.height = '100%';
    rulerEl.style.width = '40px';
    rulerEl.style.borderRight = '1px solid #ccc';
    
    // 根据最大深度确定合适的刻度间隔
    let stepSize = 100; // 默认间隔为100米
    
    if (maxDepth > 2000) {
        stepSize = 500; // 超过2000米，使用500米间隔
    } else if (maxDepth > 1000) {
        stepSize = 200; // 超过1000米，使用200米间隔
    }
    
    // 添加刻度，从0开始，按stepSize增加，直到超过maxDepth
    for (let depth = 0; depth <= maxDepth; depth += stepSize) {
        const depthLabel = document.createElement('div');
        depthLabel.style.position = 'absolute';
        depthLabel.style.top = `${20 + depth * scale}px`;
        depthLabel.style.right = '5px';
        depthLabel.style.fontSize = '10px';
        depthLabel.textContent = `${depth}m`;
        
        const tick = document.createElement('div');
        tick.style.position = 'absolute';
        tick.style.top = `${20 + depth * scale}px`;
        tick.style.right = '0';
        tick.style.width = '5px';
        tick.style.borderTop = '1px solid #000';
        
        rulerEl.appendChild(depthLabel);
        rulerEl.appendChild(tick);
    }
    
    canvas.appendChild(rulerEl);
    
    // 绘制套管
    casingItems.forEach(item => {
        const topDepth = parseFloat(item.querySelector('.casing-top-depth').value) || 0;
        const bottomDepth = parseFloat(item.querySelector('.casing-bottom-depth').value) || 0;
        const casingOD = parseFloat(item.querySelector('.casing-od').value) || 0;
        
        if (topDepth >= 0 && bottomDepth > topDepth && casingOD > 0) {
            // 计算宽度比例 (最大100px宽)
            const maxWidth = 100;
            const widthRatio = casingOD / 300; // 假设最大套管直径为300mm
            const width = maxWidth * widthRatio;
            
            const casingEl = document.createElement('div');
            casingEl.style.position = 'absolute';
            casingEl.style.left = `${centerX - width/2}px`;
            casingEl.style.top = `${20 + topDepth * scale}px`;
            casingEl.style.width = `${width}px`;
            casingEl.style.height = `${(bottomDepth - topDepth) * scale}px`;
            casingEl.style.backgroundColor = '#f0f0f0';
            casingEl.style.border = '1px solid #888';
            casingEl.style.borderTop = '0';
            casingEl.style.borderRadius = '0 0 3px 3px';
            
            canvas.appendChild(casingEl);
        }
    });
    
    // 绘制油管
    const tubingOD = parseFloat(document.getElementById('tubingOD').value) || 0;
    
    if (tubingDepth > 0 && tubingOD > 0) {
        // 计算宽度比例
        const maxWidth = 100;
        const widthRatio = tubingOD / 300;
        const width = maxWidth * widthRatio;
        
        const tubingEl = document.createElement('div');
        tubingEl.style.position = 'absolute';
        tubingEl.style.left = `${centerX - width/2}px`;
        tubingEl.style.top = `${20}px`;
        tubingEl.style.width = `${width}px`;
        tubingEl.style.height = `${tubingDepth * scale}px`;
        tubingEl.style.backgroundColor = '#d9534f';
        tubingEl.style.border = '1px solid #a94442';
        tubingEl.style.borderRadius = '0 0 3px 3px';
        tubingEl.style.zIndex = '10';
        
        canvas.appendChild(tubingEl);
    }
}
