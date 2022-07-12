arr = [[1,2],[3,4],[5,6]]

# p arr.transpose

def mytranspose(arr)
    retVal = []
    (0...arr[0].length).each do |i| (1)
        temp = []
        (0...arr.length).each do |j| (0)
            temp << arr[j][i]
        end
        retVal << temp
    end
    retVal
end

# p mytranspose(arr)



# arr[0][1]
# arr[1][1]
# arr[2][1]

p [3, 6, 10].inject(10) {|sum, number| sum + number}